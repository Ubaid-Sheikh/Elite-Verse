export const EmailTemplate = ({ name, email, projectIdea }) => {
    return (
        <div>
            <h1>Client</h1>
            <p>From : <strong>{name}</strong></p>
            <p>Email : <strong>{email}</strong></p>
            <p>Message : <strong>{projectIdea}</strong></p>
        </div>
    )
}