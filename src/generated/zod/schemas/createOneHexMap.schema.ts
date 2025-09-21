import { z } from 'zod';
import { HexMapSelectObjectSchema } from './objects/HexMapSelect.schema';
import { HexMapIncludeObjectSchema } from './objects/HexMapInclude.schema';
import { HexMapCreateInputObjectSchema } from './objects/HexMapCreateInput.schema';
import { HexMapUncheckedCreateInputObjectSchema } from './objects/HexMapUncheckedCreateInput.schema';

export const HexMapCreateOneSchema = z.object({ select: HexMapSelectObjectSchema.optional(), include: HexMapIncludeObjectSchema.optional(), data: z.union([HexMapCreateInputObjectSchema, HexMapUncheckedCreateInputObjectSchema])  })