import { z } from 'zod';
import { HexTypeSelectObjectSchema } from './objects/HexTypeSelect.schema';
import { HexTypeIncludeObjectSchema } from './objects/HexTypeInclude.schema';
import { HexTypeWhereUniqueInputObjectSchema } from './objects/HexTypeWhereUniqueInput.schema';

export const HexTypeDeleteOneSchema = z.object({ select: HexTypeSelectObjectSchema.optional(), include: HexTypeIncludeObjectSchema.optional(), where: HexTypeWhereUniqueInputObjectSchema  })