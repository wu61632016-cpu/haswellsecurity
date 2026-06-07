import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    let data: Record<string, any> = {};
    if (contentType.includes("application/json")) {
      data = await request.json();
    } else {
      const formData = await request.formData();
      data = Object.fromEntries(formData.entries());
    }
    console.log("RFQ Lead:", data);

    // 从环境变量中获取 SMTP 配置
    const smtpHost = process.env.SMTP_HOST || "smtp.mxhichina.com"; // 默认为阿里云企业邮箱主机
    const smtpPort = parseInt(process.env.SMTP_PORT || "465");
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const notificationEmail = process.env.NOTIFICATION_EMAIL || smtpUser;

    // 只有在配置了邮箱和密码时才触发发送
    if (smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465, // 465 端口采用安全 SSL 连接
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const mailOptions = {
        from: `"${data.name || 'Website RFQ'}" <${smtpUser}>`, // 发件人必须是认证后的阿里云企业邮箱
        to: notificationEmail,
        replyTo: data.email, // 支持您在邮箱里点击“回复”直接回复给客户
        subject: `[Haswell RFQ] New Inquiry from ${data.name || 'Customer'}`,
        text: `
您收到了一封来自 Haswell Security 独立站的新商务询盘：

姓名: ${data.name || '无'}
邮箱: ${data.email || '无'}
公司: ${data.company || '无'}
感兴趣产品: ${data.productInterest || '无'}

留言详情:
${data.message || '无'}
        `,
        html: `
          <div style="font-family: sans-serif; padding: 20px; line-height: 1.6; color: #333;">
            <h2 style="color: #0c2340; border-bottom: 2px solid #00c1d4; padding-bottom: 10px;">新独立站商务询盘</h2>
            <p>您收到了一封来自 Haswell Security 网站的新商务询盘。</p>
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <tr style="background-color: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; width: 150px;">客户姓名:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${data.name || '无'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">电子邮箱:</td>
                <td style="padding: 10px; border: 1px solid #ddd;"><a href="mailto:${data.email}">${data.email || '无'}</a></td>
              </tr>
              <tr style="background-color: #f8f9fa;">
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">公司名称:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${data.company || '无'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">感兴趣的产品:</td>
                <td style="padding: 10px; border: 1px solid #ddd;">${data.productInterest || '无'}</td>
              </tr>
            </table>
            <div style="background-color: #f0f4f8; padding: 15px; border-radius: 8px; margin-top: 20px; border-left: 4px solid #00c1d4;">
              <h3 style="margin-top: 0; color: #0c2340;">留言详情:</h3>
              <p style="white-space: pre-wrap; margin-bottom: 0;">${data.message || '无'}</p>
            </div>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      console.log("RFQ Email sent successfully.");
    } else {
      console.warn("SMTP settings are not configured. Email sending skipped.");
    }

    return Response.json({ success: true, message: "Inquiry submitted." });
  } catch (error: any) {
    console.error("RFQ sending failed:", error);
    return Response.json({ success: false, message: error.message || "Submit failed." }, { status: 500 });
  }
}
