import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BackgroundSelectObjectSchema } from './BackgroundSelect.schema';
import { BackgroundIncludeObjectSchema } from './BackgroundInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => BackgroundSelectObjectSchema).optional(),
  include: z.lazy(() => BackgroundIncludeObjectSchema).optional()
}).strict();
export const BackgroundArgsObjectSchema = makeSchema();
export const BackgroundArgsObjectZodSchema = makeSchema();
