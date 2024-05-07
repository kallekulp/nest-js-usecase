// auth.module.ts
import { Module } from '@nestjs/common';
import { BService } from "./b.service"; // Import SubModule from a higher level directory

@Module({
  imports: [],
  providers: [BService],
  exports: [BService], // Export AuthGuard so that it can be used in other modules
})
export class BModule {}