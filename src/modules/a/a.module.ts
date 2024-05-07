// auth.module.ts
import { Module } from '@nestjs/common';
import { AuthGuard } from './auth.guard'; // Import AuthGuard from the same directory
import { BModule } from "../b/b.module"; // Import SubModule from a higher level directory

@Module({
  imports: [BModule],
  providers: [AuthGuard],
  exports: [AuthGuard],
})
export class AModule {}