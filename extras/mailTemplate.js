export function getMailTemplate(content) {
    const mailTemplate = `
        <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Quick Serve</title>
        <style>
            body {
                background-color: #f7f7f7;
                padding: 20px;
                font-family: 'Poppins', sans-serif;
            }
            .container {
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                border: 1px solid #cfcfcf;
                border-radius: 10px;
                padding: 20px;
                text-align: center;
            }
            .logo {
                margin-bottom: 20px;
            }
            .logo img {
                width: 100px;
                height: auto;
            }
            .card {
                background-color: #fff2e5;
                padding: 20px;
                border-radius: 10px;
                border: 1px solid #cfcfcf;
                text-align: left;
            }
            .card h3 {
                color: #ff8914;
            }
        </style>
    </head>
    <body>
        <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center">
            <tr>
                <td>
                    <div class="container">
                        <div class="logo">
                            <img
                                src="https://res.cloudinary.com/dmvdbpyqk/image/upload/v1722588077/logo_blcvmh.png"
                                alt="Quick Serve"
                            />
                            <h3 style="color: #ff8914;">We value your Time & Taste</h3>
                        </div>
                        <div class="card">
                            <h3>Hello,</h3>
                            <p style="margin-top: 20px;">
                                ${content}
                            </p>
                        </div>
                    </div>
                </td>
            </tr>
        </table>
    </body>
</html>
    `;
    return mailTemplate;
}
