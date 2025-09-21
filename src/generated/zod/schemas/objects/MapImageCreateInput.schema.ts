import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexMapCreateNestedOneWithoutImagesInputObjectSchema } from './HexMapCreateNestedOneWithoutImagesInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  data: z.string(),
  x: z.number(),
  y: z.number(),
  width: z.number(),
  height: z.number(),
  createdAt: z.coerce.date().optional(),
  hexMap: z.lazy(() => HexMapCreateNestedOneWithoutImagesInputObjectSchema)
}).strict();
export const MapImageCreateInputObjectSchema: z.ZodType<Prisma.MapImageCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.MapImageCreateInput>;
export const MapImageCreateInputObjectZodSchema = makeSchema();
