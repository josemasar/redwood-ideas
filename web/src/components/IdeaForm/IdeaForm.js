import {
  Form,
  FormError,
  FieldError,
  Label,
  CheckboxField,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const IdeaForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.idea?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="opps"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Opps
        </Label>
        <CheckboxField
          name="opps"
          defaultChecked={props.idea?.opps}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="opps" className="rw-field-error" />

        <Label
          name="partNum"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Part num
        </Label>
        <TextField
          name="partNum"
          defaultValue={props.idea?.partNum}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="partNum" className="rw-field-error" />

        <Label
          name="product"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Product
        </Label>
        <TextField
          name="product"
          defaultValue={props.idea?.product}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="product" className="rw-field-error" />

        <Label
          name="system"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          System
        </Label>
        <TextField
          name="system"
          defaultValue={props.idea?.system}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="system" className="rw-field-error" />

        <Label
          name="vendor"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Vendor
        </Label>
        <TextField
          name="vendor"
          defaultValue={props.idea?.vendor}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="vendor" className="rw-field-error" />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>
        <TextField
          name="title"
          defaultValue={props.idea?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="title" className="rw-field-error" />

        <Label
          name="body"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Body
        </Label>
        <TextField
          name="body"
          defaultValue={props.idea?.body}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="body" className="rw-field-error" />

        <Label
          name="value"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Value
        </Label>
        <NumberField
          name="value"
          defaultValue={props.idea?.value}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="value" className="rw-field-error" />

        <Label
          name="author"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Author
        </Label>
        <TextField
          name="author"
          defaultValue={props.idea?.author}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="author" className="rw-field-error" />

        <Label
          name="active"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Active
        </Label>
        <CheckboxField
          name="active"
          defaultChecked={props.idea?.active}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="active" className="rw-field-error" />

        <Label
          name="readyInMonth"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Ready in month
        </Label>
        <NumberField
          name="readyInMonth"
          defaultValue={props.idea?.readyInMonth}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="readyInMonth" className="rw-field-error" />

        <Label
          name="readyInYear"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Ready in year
        </Label>
        <NumberField
          name="readyInYear"
          defaultValue={props.idea?.readyInYear}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="readyInYear" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default IdeaForm
