package jp.brewhub.server.auth

import jp.brewhub.server.auth.authentication.AcquireAccessTokenUser
import org.springframework.security.core.Authentication
import org.springframework.security.core.annotation.AuthenticationPrincipal
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.util.*

@RestController
@RequestMapping("/auth/api/users")
class UserController(
    private val userService: UserService
) {
    @GetMapping("/me")
    fun me(authentication: Authentication): UserResponse {
        val acquireAccessTokenUser = authentication.principal as AcquireAccessTokenUser
        return userService.createOrGet(acquireAccessTokenUser)
    }
}
