import { z } from 'zod';
import { HexTypeSelectObjectSchema } from './objects/HexTypeSelect.schema';
import { HexTypeIncludeObjectSchema } from './objects/HexTypeInclude.schema';
import { HexTypeCreateInputObjectSchema } from './objects/HexTypeCreateInput.schema';
import { HexTypeUncheckedCreateInputObjectSchema } from './objects/HexTypeUncheckedCreateInput.schema';

export const HexTypeCreateOneSchema = z.object({ select: HexTypeSelectObjectSchema.optional(), include: HexTypeIncludeObjectSchema.optional(), data: z.union([HexTypeCreateInputObjectSchema, HexTypeUncheckedCreateInputObjectSchema])  })