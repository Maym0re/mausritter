import { z } from 'zod';
import { HexMapSelectObjectSchema } from './objects/HexMapSelect.schema';
import { HexMapUpdateManyMutationInputObjectSchema } from './objects/HexMapUpdateManyMutationInput.schema';
import { HexMapWhereInputObjectSchema } from './objects/HexMapWhereInput.schema';

export const HexMapUpdateManyAndReturnSchema = z.object({ select: HexMapSelectObjectSchema.optional(), data: HexMapUpdateManyMutationInputObjectSchema, where: HexMapWhereInputObjectSchema.optional()  }).strict()