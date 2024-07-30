import { Injectable } from '@nestjs/common';

@Injectable()
export class SigniService {
  async createContract() {
    const webhookUrl = process.env['SIGNI_WEBHOOK_URL']!;
    const body = {
      locale: 'sk',
      people: [
        {
          is_proposer: true,
          email: process.env['SIGNI_PROPOSER_EMAIL'],
          contract_role: 'notice',
        },
        {
          is_proposer: false,
          email: process.env['SIGNI_SIGNER_EMAIL'],
          contract_role: 'sign',
          phone: process.env['SIGNI_SIGNER_PHONE_NUMBER'],
          first_name: 'mock-first-name',
          last_name: 'mock-last-name',
          person_type: 'citizen',
        },
      ],
      template: {
        id: process.env['SIGNI_TEMPLATE_ID'],
        parameters: [
          {
            id: 'id',
            value: 'mock-id',
          },
          {
            id: 'name',
            value: 'mock-name',
          },
          {
            id: 'address',
            value: 'mock-address',
          },
          {
            id: 'birthDate',
            value: 'mock-birthdate',
          },
          {
            id: 'email',
            value: 'mock-email',
          },
          {
            id: 'phoneNumber',
            value: process.env['SIGNI_SIGNER_PHONE_NUMBER'],
          },
          {
            id: 'price',
            value: 'mock-price',
          },
          {
            id: 'programName',
            value: 'mock-program-name',
          },
          {
            id: 'variableSymbol',
            value: 'mock-variable-symbol',
          },
        ],
      },
      webhooks: [
        {
          state: 'completed',
          url:
            webhookUrl +
            `/api/signi/contract/callback?state=completed&someQueryParam=someValue`,
        },
        {
          state: 'rejected',
          url:
            webhookUrl +
            `/api/signi/contract/callback?state=rejected&someQueryParam=someValue`,
        },
        {
          state: 'expired',
          url:
            webhookUrl +
            `/api/signi/contract/callback?state=expired&someQueryParam=someValue`,
        },
      ],
    };
    console.log(JSON.stringify(body, null, 2));

    const response = await fetch('https://api.signi.com/api/v1/contract/', {
      method: 'POST',
      headers: {
        'x-api-key': process.env['SIGNI_API_KEY']!,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const result = await response.json();
    console.log(JSON.stringify(result, null, 2));

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return result;
  }
}
