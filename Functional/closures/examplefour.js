const auditProps = {
    createdAt: {deafult: new Date()},
    updatedAt: {deafult: new Date()},
    createdBy: {type: Schema.Types.ObjectId, ref: 'User'},
    updatedBy: {type: Schema.Types.ObjectId, ref: 'User'},
}

const Model = defaultProps => {
    return (name, props) => {
        const Shema = mongoose.Shema({
            ...defaultProps,
            ...props
        })

        return mongoose.model(name, schema)
    }
}

export const withAudit = Model(auditProps)


// * ON ANOTHER FILE
withAudit('Product', {
    name: String,
    desc: String,
})