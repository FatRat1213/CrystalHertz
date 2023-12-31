import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { MailData } from 'src/types/mail.type';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendMail(data: MailData, templatePath: string) {
    await this.mailerService.sendMail({
      to: data.to,
      subject: data.subject,
      template: `./${templatePath}`,
      context: {
        ...data,
      },
    });
  }
}
