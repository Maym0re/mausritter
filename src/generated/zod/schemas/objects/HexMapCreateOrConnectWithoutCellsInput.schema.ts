import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexMapWhereUniqueInputObjectSchema } from './HexMapWhereUniqueInput.schema';
import { HexMapCreateWithoutCellsInputObjectSchema } from './HexMapCreateWithoutCellsInput.schema';
import { HexMapUncheckedCreateWithoutCellsInputObjectSchema } from './HexMapUncheckedCreateWithoutCellsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HexMapWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => HexMapCreateWithoutCellsInputObjectSchema), z.lazy(() => HexMapUncheckedCreateWithoutCellsInputObjectSchema)])
}).strict();
export const HexMapCreateOrConnectWithoutCellsInputObjectSchema: z.ZodType<Prisma.HexMapCreateOrConnectWithoutCellsInput> = makeSchema() as unknown as z.ZodType<Prisma.HexMapCreateOrConnectWithoutCellsInput>;
export const HexMapCreateOrConnectWithoutCellsInputObjectZodSchema = makeSchema();
