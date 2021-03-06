import {
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
    GraphQLObjectTypeConfig,
    GraphQLBoolean, GraphQLList
} from "graphql";

import { safeStatusType, safeStatusInputType } from "./safeStatus";

export const statusType = new GraphQLObjectType({
    name: "Status",
    fields: () => ({
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        KioskIC: {
            type: GraphQLString
        },
        createdAt: {
            type: GraphQLString
        },
        SafeStatuss: {
            type: new GraphQLList(safeStatusType)
        }
    })
});

export const statusInputType = new GraphQLInputObjectType({
    name: "StatusInput",
    fields: () => ({
        KioskIC: {
            type: GraphQLString
        },
        SafeStatuss: {
            type: new GraphQLList(safeStatusInputType)
        }
    })
});