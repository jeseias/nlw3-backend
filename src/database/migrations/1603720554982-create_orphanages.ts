import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1603720554982 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Realizar alteracoes
    // Criar tabelas, criar um novo campo

    await queryRunner.createTable(new Table({
      name: 'orphanages',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'name',
          type: 'varchar'
        },
        {
          name: 'latitude',
          type: 'decimal',
          scale: 10,
          precision: 2
        },
        {
          name: 'longitude',
          type: 'decimal',
          scale: 10,
          precision: 2
        },
        {
          name: 'about',
          type: 'text'
        },
        {
          name: 'instructions',
          type: 'text'
        },
        {
          name: 'open_on_weekends',
          type: 'boolean',
          default: false
        },
        {
          name: 'opening_hours',
          type: 'varchar'
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Desfazer o que foi feito UP
    // Caso houve algum erro

    queryRunner.dropTable('orphanages');
  }

}