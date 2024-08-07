export function getMailTemplate({ content }) {
    const mailTemplate = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Quick Serve</title>
            <style>
                body {
                    margin: 0;
                    padding: 0;
                    font-family: Arial, sans-serif;
                    background-color: #f9f9f9;
                }
                .container {
                    background-color: #f9f9f9;
                    padding: 30px;
                }
                .content {
                    background-color: #ffffff;
                    padding: 20px;
                    max-width: 600px;
                    margin: 0 auto;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
                h3 {
                    color: #333333;
                }
                p {
                    color: #666666;
                }
                @media only screen and (max-width: 600px) {
                    .content {
                        padding: 15px;
                    }
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="content">
                    <h3>Quick Serve</h3>
                    <p>Hi,</p>
                    <p>${content}</p>
                </div>
            </div>
        </body>
        </html>
    `;
    return mailTemplate;
}
