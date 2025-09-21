import { z } from 'zod';
import { HexMapSelectObjectSchema } from './objects/HexMapSelect.schema';
import { HexMapIncludeObjectSchema } from './objects/HexMapInclude.schema';
import { HexMapWhereUniqueInputObjectSchema } from './objects/HexMapWhereUniqueInput.schema';

export const HexMapDeleteOneSchema = z.object({ select: HexMapSelectObjectSchema.optional(), include: HexMapIncludeObjectSchema.optional(), where: HexMapWhereUniqueInputObjectSchema  })