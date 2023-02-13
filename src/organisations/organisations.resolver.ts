import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrganisationsService } from './organisations.service';
import { Organisation } from './entities/organisation.entity';
import { CreateOrganisationInput } from './dto/create-organisation.input';
import { UpdateOrganisationInput } from './dto/update-organisation.input';

@Resolver(() => Organisation)
export class OrganisationsResolver {
  constructor(private readonly organisationsService: OrganisationsService) {}

  @Mutation(() => Organisation)
  createOrganisation(@Args('createOrganisationInput') createOrganisationInput: CreateOrganisationInput) {
    return this.organisationsService.create(createOrganisationInput);
  }

  @Query(() => [Organisation], { name: 'organisations' })
  findAll() {
    return this.organisationsService.findAll();
  }

  @Query(() => Organisation, { name: 'organisation' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.organisationsService.findOne(id);
  }

  @Mutation(() => Organisation)
  updateOrganisation(@Args('updateOrganisationInput') updateOrganisationInput: UpdateOrganisationInput) {
    return this.organisationsService.update(updateOrganisationInput.id, updateOrganisationInput);
  }

  @Mutation(() => Organisation)
  removeOrganisation(@Args('id', { type: () => Int }) id: number) {
    return this.organisationsService.remove(id);
  }
}
