import { Module } from '@nestjs/common';
import { RecipesService } from './recipe.service';
import { RecipeController } from './recipe.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RecipeController],
  providers: [RecipesService],
})
export class RecipeModule {}
