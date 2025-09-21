import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexMapCreateWithoutImagesInputObjectSchema } from './HexMapCreateWithoutImagesInput.schema';
import { HexMapUncheckedCreateWithoutImagesInputObjectSchema } from './HexMapUncheckedCreateWithoutImagesInput.schema';
import { HexMapCreateOrConnectWithoutImagesInputObjectSchema } from './HexMapCreateOrConnectWithoutImagesInput.schema';
import { HexMapWhereUniqueInputObjectSchema } from './HexMapWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => HexMapCreateWithoutImagesInputObjectSchema), z.lazy(() => HexMapUncheckedCreateWithoutImagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => HexMapCreateOrConnectWithoutImagesInputObjectSchema).optional(),
  connect: z.lazy(() => HexMapWhereUniqueInputObjectSchema).optional()
}).strict();
export const HexMapCreateNestedOneWithoutImagesInputObjectSchema: z.ZodType<Prisma.HexMapCreateNestedOneWithoutImagesInput> = makeSchema() as unknown as z.ZodType<Prisma.HexMapCreateNestedOneWithoutImagesInput>;
export const HexMapCreateNestedOneWithoutImagesInputObjectZodSchema = makeSchema();
