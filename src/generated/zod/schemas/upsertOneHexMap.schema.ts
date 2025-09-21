import { z } from 'zod';
import { HexMapSelectObjectSchema } from './objects/HexMapSelect.schema';
import { HexMapIncludeObjectSchema } from './objects/HexMapInclude.schema';
import { HexMapWhereUniqueInputObjectSchema } from './objects/HexMapWhereUniqueInput.schema';
import { HexMapCreateInputObjectSchema } from './objects/HexMapCreateInput.schema';
import { HexMapUncheckedCreateInputObjectSchema } from './objects/HexMapUncheckedCreateInput.schema';
import { HexMapUpdateInputObjectSchema } from './objects/HexMapUpdateInput.schema';
import { HexMapUncheckedUpdateInputObjectSchema } from './objects/HexMapUncheckedUpdateInput.schema';

export const HexMapUpsertSchema = z.object({ select: HexMapSelectObjectSchema.optional(), include: HexMapIncludeObjectSchema.optional(), where: HexMapWhereUniqueInputObjectSchema, create: z.union([ HexMapCreateInputObjectSchema, HexMapUncheckedCreateInputObjectSchema ]), update: z.union([ HexMapUpdateInputObjectSchema, HexMapUncheckedUpdateInputObjectSchema ])  })