import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  campaignId: z.string(),
  size: z.number().int().optional(),
  centerX: z.number().int().optional(),
  centerY: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const HexMapCreateManyInputObjectSchema: z.ZodType<Prisma.HexMapCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.HexMapCreateManyInput>;
export const HexMapCreateManyInputObjectZodSchema = makeSchema();
