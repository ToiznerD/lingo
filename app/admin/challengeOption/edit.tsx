import { BooleanInput, Edit, NumberInput, ReferenceInput, SelectInput, SimpleForm, TextInput, required } from 'react-admin';

export const ChallengeOptionEdit = () => {
    return (
        <Edit>
            <SimpleForm>
                <TextInput source="text" validate={[required()]} label="Text" />
                <BooleanInput
                    source="correct"
                    label="Correct Option"
                />
                <ReferenceInput
                    source="challengeId"
                    reference="challenges"
                />
                <TextInput
                    source="imageSrc"
                    validate={[required()]}
                    label="Image URL"
                />
                <TextInput
                    source="audioSrc"
                    validate={[required()]}
                    label="Audio URL"
                />
            </SimpleForm>
        </Edit>
    )
}