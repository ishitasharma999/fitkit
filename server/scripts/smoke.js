// End-to-end smoke test: create user -> record activity -> list -> delete.
// Expects the API to be running at API_URL (default http://localhost:5000).
const API = process.env.API_URL || 'http://localhost:5000';
const stamp = Date.now().toString(36);
const username = `smoke_${stamp}`;

async function call(method, path, body) {
  const res = await fetch(`${API}${path}`, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  });
  const json = await res.json().catch(() => ({}));
  return { status: res.status, json };
}

function assert(cond, msg) {
  if (!cond) {
    console.error(`FAIL: ${msg}`);
    process.exit(1);
  }
  console.log(`ok   ${msg}`);
}

(async () => {
  let r = await call('GET', '/api/health');
  assert(r.status === 200 && r.json.ok, 'health check');

  r = await call('POST', '/api/users', { username, email: `${username}@example.com`, password: 'secret123' });
  assert(r.status === 201 && r.json.username === username, 'create user');

  r = await call('POST', '/api/users', { username, email: `${username}@example.com`, password: 'secret123' });
  assert(r.status === 409, 'duplicate username rejected');

  r = await call('POST', '/api/users', { username: 'ab', email: 'bad', password: '1' });
  assert(r.status === 400 && r.json.errors.length === 3, 'validation errors reported');

  r = await call('POST', '/api/exercises', { username, activity: 'running', duration: 30, date: '2026-11-02' });
  assert(r.status === 201 && r.json._id, 'record activity');
  const id = r.json._id;

  r = await call('POST', '/api/exercises', { username: 'nobody_here', activity: 'running', duration: 30, date: '2026-11-02' });
  assert(r.status === 404, 'activity for unknown user rejected');

  r = await call('GET', '/api/exercises');
  assert(r.status === 200 && r.json.some((e) => e._id === id), 'new record visible immediately in list');

  r = await call('DELETE', `/api/exercises/${id}`);
  assert(r.status === 200, 'delete record');

  r = await call('GET', '/api/exercises');
  assert(!r.json.some((e) => e._id === id), 'record gone after delete');

  console.log('\nAll smoke checks passed.');
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
