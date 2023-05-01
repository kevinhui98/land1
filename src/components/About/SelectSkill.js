import Form from 'react-bootstrap/Form';

function SelectSkill(props) {
    const { skill, onChange } = props
    console.log(skill)
    return (
        <Form.Select onChange={onChange} size='lg'>
            {skill.map(element => {
                return (
                    <option value={element}>{element}</option>
                )
            })
            }
        </Form.Select>
    )
}
export default SelectSkill;