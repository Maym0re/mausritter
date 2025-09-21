import { z } from 'zod';
import { BackgroundSelectObjectSchema } from './objects/BackgroundSelect.schema';
import { BackgroundIncludeObjectSchema } from './objects/BackgroundInclude.schema';
import { BackgroundUpdateInputObjectSchema } from './objects/BackgroundUpdateInput.schema';
import { BackgroundUncheckedUpdateInputObjectSchema } from './objects/BackgroundUncheckedUpdateInput.schema';
import { BackgroundWhereUniqueInputObjectSchema } from './objects/BackgroundWhereUniqueInput.schema';

export const BackgroundUpdateOneSchema = z.object({ select: BackgroundSelectObjectSchema.optional(), include: BackgroundIncludeObjectSchema.optional(), data: z.union([BackgroundUpdateInputObjectSchema, BackgroundUncheckedUpdateInputObjectSchema]), where: BackgroundWhereUniqueInputObjectSchema  })