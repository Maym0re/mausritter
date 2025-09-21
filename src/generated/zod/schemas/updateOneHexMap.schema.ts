import { z } from 'zod';
import { HexMapSelectObjectSchema } from './objects/HexMapSelect.schema';
import { HexMapIncludeObjectSchema } from './objects/HexMapInclude.schema';
import { HexMapUpdateInputObjectSchema } from './objects/HexMapUpdateInput.schema';
import { HexMapUncheckedUpdateInputObjectSchema } from './objects/HexMapUncheckedUpdateInput.schema';
import { HexMapWhereUniqueInputObjectSchema } from './objects/HexMapWhereUniqueInput.schema';

export const HexMapUpdateOneSchema = z.object({ select: HexMapSelectObjectSchema.optional(), include: HexMapIncludeObjectSchema.optional(), data: z.union([HexMapUpdateInputObjectSchema, HexMapUncheckedUpdateInputObjectSchema]), where: HexMapWhereUniqueInputObjectSchema  })