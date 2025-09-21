import { z } from 'zod';
import { BackgroundSelectObjectSchema } from './objects/BackgroundSelect.schema';
import { BackgroundIncludeObjectSchema } from './objects/BackgroundInclude.schema';
import { BackgroundCreateInputObjectSchema } from './objects/BackgroundCreateInput.schema';
import { BackgroundUncheckedCreateInputObjectSchema } from './objects/BackgroundUncheckedCreateInput.schema';

export const BackgroundCreateOneSchema = z.object({ select: BackgroundSelectObjectSchema.optional(), include: BackgroundIncludeObjectSchema.optional(), data: z.union([BackgroundCreateInputObjectSchema, BackgroundUncheckedCreateInputObjectSchema])  })