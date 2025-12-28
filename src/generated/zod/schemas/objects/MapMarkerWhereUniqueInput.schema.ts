import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const MapMarkerWhereUniqueInputObjectSchema: z.ZodType<Prisma.MapMarkerWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.MapMarkerWhereUniqueInput>;
export const MapMarkerWhereUniqueInputObjectZodSchema = makeSchema();
