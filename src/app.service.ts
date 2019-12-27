import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  test(): string {
    return 'Test 2 successful!';
  }
}
