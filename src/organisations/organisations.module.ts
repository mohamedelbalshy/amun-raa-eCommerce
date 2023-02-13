import { Module } from '@nestjs/common';
import { OrganisationsService } from './organisations.service';
import { OrganisationsResolver } from './organisations.resolver';

@Module({
  providers: [OrganisationsResolver, OrganisationsService]
})
export class OrganisationsModule {}
