import { z } from 'zod';
import { HexTypeSelectObjectSchema } from './objects/HexTypeSelect.schema';
import { HexTypeIncludeObjectSchema } from './objects/HexTypeInclude.schema';
import { HexTypeUpdateInputObjectSchema } from './objects/HexTypeUpdateInput.schema';
import { HexTypeUncheckedUpdateInputObjectSchema } from './objects/HexTypeUncheckedUpdateInput.schema';
import { HexTypeWhereUniqueInputObjectSchema } from './objects/HexTypeWhereUniqueInput.schema';

export const HexTypeUpdateOneSchema = z.object({ select: HexTypeSelectObjectSchema.optional(), include: HexTypeIncludeObjectSchema.optional(), data: z.union([HexTypeUpdateInputObjectSchema, HexTypeUncheckedUpdateInputObjectSchema]), where: HexTypeWhereUniqueInputObjectSchema  })