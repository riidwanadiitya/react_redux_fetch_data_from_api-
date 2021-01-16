import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'

function UserContainer({ userData, fetchUsers }) {
    useEffect(() => {
        fetchUsers()
    }, [fetchUsers])
    return userData.loading ? (
        <h2>Loading</h2>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
                <div>
                    <h2>User List</h2>
                    <div>
                        {
                            userData &&
                            userData.users &&
                            userData.users.map(
                                (user, idx) =>
                                    <div key={idx}>
                                        <h3>{user.name}</h3>
                                    </div>

                            )
                        }
                    </div>
                </div>
            )

}

const mapStateToProps = state => {
    return {
        userData: state.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
