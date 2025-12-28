import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { BackgroundSelectObjectSchema as BackgroundSelectObjectSchema } from './objects/BackgroundSelect.schema';
import { BackgroundIncludeObjectSchema as BackgroundIncludeObjectSchema } from './objects/BackgroundInclude.schema';
import { BackgroundWhereUniqueInputObjectSchema as BackgroundWhereUniqueInputObjectSchema } from './objects/BackgroundWhereUniqueInput.schema';

export const BackgroundFindUniqueSchema: z.ZodType<Prisma.BackgroundFindUniqueArgs> = z.object({ select: BackgroundSelectObjectSchema.optional(), include: BackgroundIncludeObjectSchema.optional(), where: BackgroundWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BackgroundFindUniqueArgs>;

export const BackgroundFindUniqueZodSchema = z.object({ select: BackgroundSelectObjectSchema.optional(), include: BackgroundIncludeObjectSchema.optional(), where: BackgroundWhereUniqueInputObjectSchema }).strict();