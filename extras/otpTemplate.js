export function otpTemplate(otp) {
    const html = `
     <div style="
      background-color: #f7f7f7; 
      padding: 20px; 
      border-radius: 10px; 
      text-align: center; 
      font-family: 'Poppins', sans-serif; 
      color: #333;
    ">
    <h1 style="
        color: #ff8914; 
        font-size: 24px; 
        margin-bottom: 10px;
      ">
      Your OTP Code
    </h1>
    <div style="
        font-size: 40px; 
        font-weight: 700; 
        letter-spacing: 5px; 
        color: #ff8000;
      ">
      ${otp}
    </div>
    <p style="
        font-size: 16px; 
        color: #666; 
        margin-top: 20px;
      ">
      Please use this code within the next 10 minutes to verify your identity.
    </p>
  </div>
`;
    return html;
}
