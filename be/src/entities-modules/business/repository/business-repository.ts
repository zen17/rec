import { EntityRepository, Repository, SelectQueryBuilder } from 'typeorm';
import { Business } from '../models/business';
import { SortSetting } from '../../../core-modules/common/models/sort-setting';

@EntityRepository(Business)
export class BusinessRepository extends Repository<Business> {

  public setSortSettingsToQueryBuilder(queryBuilder: SelectQueryBuilder<Business>, sortSettings: SortSetting[] = []): SelectQueryBuilder<Business> {
    sortSettings.forEach(sortSetting => {
      queryBuilder.orderBy(sortSetting.sortProperty, sortSetting.sortOrder);
    });
    return queryBuilder;
  }
}
