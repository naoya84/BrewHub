package jp.brewhub.server.auth

import jp.brewhub.server.auth.authentication.AcquireAccessTokenUser
import jp.brewhub.server.auth.corder.OriginalJwtEncoder
import jp.brewhub.server.auth.entity.UserRecord
import org.springframework.stereotype.Service

interface UserService {
    fun createOrGet(acquireAccessTokenUser: AcquireAccessTokenUser): UserResponse
}

@Service
class UserServiceImpl(
    private val userRepository: UserRepository,
    private val jwtEncoder: OriginalJwtEncoder
) : UserService {
    override fun createOrGet(acquireAccessTokenUser: AcquireAccessTokenUser): UserResponse {
        val userRecord = userRepository.findBySubject(acquireAccessTokenUser.subject)
            ?: userRepository.save(UserRecord(subject = acquireAccessTokenUser.subject, username = acquireAccessTokenUser.name))
        val accessToken = jwtEncoder.encode(userRecord)
        return UserResponse(userRecord.id, userRecord.username, accessToken)
    }
}