import React from "react";
import { Container } from "@mui/material";
import SkillCard from "./SkillCard";
// import java from "./Images/javalogo.png";
import { Grid } from '@mui/material';
const Skills = () => {
  return (
    <Container maxWidth="xl" id="skills-container">
        <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
      <SkillCard
        title="Excercise"
        description="Capture your fitness journey with our intuitive Exercise Log! Record each workout session, track your progress, and celebrate your achievements. Whether it's lifting weights, running miles, or mastering yoga poses, use our Exercise Log to track your progress over time and log your efforts and stay motivated on your path to a healthier you."
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6fVYnIdhHiGxT2MSSDGh3LOG5u6cX1ECyEQ&usqp=CAU"
      /> </Grid>
      <Grid item xs={12} sm={4}>
      <SkillCard
        title="User"
       description="Unlock a personalized fitness journey by creating your account! With our user-friendly platform, you can seamlessly track your progress over time. Your dedicated user profile serves as a central hub for your fitness data, making it easy to stay organized and motivated. create your account and elevate your fitness experience today!"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKnvR-L-9jrhcphSGj08XSyxPILYBRZlKZmg&usqp=CAU"
      /> </Grid>
      <Grid item xs={12} sm={4}>
      <SkillCard
        title="Dashboard"
        description="Experience a comprehensive overview of your fitness endeavors on our personalized Dashboard. Visualize your exercise data and gain insights into your fitness journey. From workout frequency to performance metrics, our Dashboard empowers you to track and analyze your progress with ease. Stay informed, stay motivated!"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4VdTVZ0O2gGNsBEE3verd9TiG-KCCu3NMpA&usqp=CAU"
      /> </Grid>
      </Grid>
      <Grid container spacing={2} marginTop={2}>
      <Grid item xs={12} sm={4}>
      <SkillCard
        title="Connect with specialists"
       description="Embark on your wellness journey with us! Our goal is to connect with specialists who are dedicated to helping you achieve your health and dietary goals. Our platform will seamlessly links you with experienced diet doctors, providing best personalized guidance and support."
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzsvr4JbzAjyxcTGui54jKqNoxyObeBZdoNRc9FZqvd3BIGsH1F7NKec4J6I22o5sbhyo&usqp=CAU"
      /> </Grid>
        <Grid item xs={12} sm={4}>
      <SkillCard
        title="Hiring"
        description="Join our innovative startup team! We're on the lookout for passionate and talented individuals to be a part of our exciting journey. If you're ready to contribute your skills to a dynamic and growing company, explore our open positions below. We believe in fostering a collaborative and inclusive work environment where your ideas can thrive."
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKSq-76RpBNbmc_jBXJSMNfDC80M_zpnL9nlTnuWEtcRP2NvFx0Ubo2bXh5n43ALirHEQ&usqp=CAU"
      /> </Grid>
      
      <Grid item xs={12} sm={4}>
      <SkillCard
        title="Contact Us"
        description="We're here to assist you! Reach out to us through our Contact Us page for any inquiries, feedback, or assistance you may need. Your questions are important to us, and our team is committed to providing prompt and helpful responses.Contact us today, and let's start a conversation. Your satisfaction is our priority, and we look forward to hearing from you!"
        image="https://www.changiairport.com/content/dam/cag/footer/mobile-masthead-768x350/m-768x350-lvl2_masthead-contact_us.jpg"
      /> </Grid>
      </Grid>
    </Container>
    
  );
};

export default Skills;
