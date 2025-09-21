import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { BackgroundSelectObjectSchema } from './objects/BackgroundSelect.schema';
import { BackgroundIncludeObjectSchema } from './objects/BackgroundInclude.schema';
import { BackgroundWhereUniqueInputObjectSchema } from './objects/BackgroundWhereUniqueInput.schema';

export const BackgroundFindUniqueSchema: z.ZodType<Prisma.BackgroundFindUniqueArgs> = z.object({ select: BackgroundSelectObjectSchema.optional(), include: BackgroundIncludeObjectSchema.optional(), where: BackgroundWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BackgroundFindUniqueArgs>;

export const BackgroundFindUniqueZodSchema = z.object({ select: BackgroundSelectObjectSchema.optional(), include: BackgroundIncludeObjectSchema.optional(), where: BackgroundWhereUniqueInputObjectSchema }).strict();