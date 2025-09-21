import { z } from 'zod';
import { BackgroundSelectObjectSchema } from './objects/BackgroundSelect.schema';
import { BackgroundIncludeObjectSchema } from './objects/BackgroundInclude.schema';
import { BackgroundWhereUniqueInputObjectSchema } from './objects/BackgroundWhereUniqueInput.schema';
import { BackgroundCreateInputObjectSchema } from './objects/BackgroundCreateInput.schema';
import { BackgroundUncheckedCreateInputObjectSchema } from './objects/BackgroundUncheckedCreateInput.schema';
import { BackgroundUpdateInputObjectSchema } from './objects/BackgroundUpdateInput.schema';
import { BackgroundUncheckedUpdateInputObjectSchema } from './objects/BackgroundUncheckedUpdateInput.schema';

export const BackgroundUpsertSchema = z.object({ select: BackgroundSelectObjectSchema.optional(), include: BackgroundIncludeObjectSchema.optional(), where: BackgroundWhereUniqueInputObjectSchema, create: z.union([ BackgroundCreateInputObjectSchema, BackgroundUncheckedCreateInputObjectSchema ]), update: z.union([ BackgroundUpdateInputObjectSchema, BackgroundUncheckedUpdateInputObjectSchema ])  })