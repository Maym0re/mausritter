import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexMapWhereUniqueInputObjectSchema } from './HexMapWhereUniqueInput.schema';
import { HexMapCreateWithoutImagesInputObjectSchema } from './HexMapCreateWithoutImagesInput.schema';
import { HexMapUncheckedCreateWithoutImagesInputObjectSchema } from './HexMapUncheckedCreateWithoutImagesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HexMapWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => HexMapCreateWithoutImagesInputObjectSchema), z.lazy(() => HexMapUncheckedCreateWithoutImagesInputObjectSchema)])
}).strict();
export const HexMapCreateOrConnectWithoutImagesInputObjectSchema: z.ZodType<Prisma.HexMapCreateOrConnectWithoutImagesInput> = makeSchema() as unknown as z.ZodType<Prisma.HexMapCreateOrConnectWithoutImagesInput>;
export const HexMapCreateOrConnectWithoutImagesInputObjectZodSchema = makeSchema();
