import { z } from 'zod';
import { HexTypeSelectObjectSchema } from './objects/HexTypeSelect.schema';
import { HexTypeIncludeObjectSchema } from './objects/HexTypeInclude.schema';
import { HexTypeWhereUniqueInputObjectSchema } from './objects/HexTypeWhereUniqueInput.schema';
import { HexTypeCreateInputObjectSchema } from './objects/HexTypeCreateInput.schema';
import { HexTypeUncheckedCreateInputObjectSchema } from './objects/HexTypeUncheckedCreateInput.schema';
import { HexTypeUpdateInputObjectSchema } from './objects/HexTypeUpdateInput.schema';
import { HexTypeUncheckedUpdateInputObjectSchema } from './objects/HexTypeUncheckedUpdateInput.schema';

export const HexTypeUpsertSchema = z.object({ select: HexTypeSelectObjectSchema.optional(), include: HexTypeIncludeObjectSchema.optional(), where: HexTypeWhereUniqueInputObjectSchema, create: z.union([ HexTypeCreateInputObjectSchema, HexTypeUncheckedCreateInputObjectSchema ]), update: z.union([ HexTypeUpdateInputObjectSchema, HexTypeUncheckedUpdateInputObjectSchema ])  })