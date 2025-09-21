import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { BackgroundSelectObjectSchema } from './objects/BackgroundSelect.schema';
import { BackgroundIncludeObjectSchema } from './objects/BackgroundInclude.schema';
import { BackgroundWhereUniqueInputObjectSchema } from './objects/BackgroundWhereUniqueInput.schema';

export const BackgroundFindUniqueOrThrowSchema: z.ZodType<Prisma.BackgroundFindUniqueOrThrowArgs> = z.object({ select: BackgroundSelectObjectSchema.optional(), include: BackgroundIncludeObjectSchema.optional(), where: BackgroundWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.BackgroundFindUniqueOrThrowArgs>;

export const BackgroundFindUniqueOrThrowZodSchema = z.object({ select: BackgroundSelectObjectSchema.optional(), include: BackgroundIncludeObjectSchema.optional(), where: BackgroundWhereUniqueInputObjectSchema }).strict();