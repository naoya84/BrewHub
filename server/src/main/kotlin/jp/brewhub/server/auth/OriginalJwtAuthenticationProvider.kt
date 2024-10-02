package jp.brewhub.server.auth

import jp.brewhub.server.auth.authentication.OriginalJwtAuthentication
import jp.brewhub.server.auth.corder.OriginalJwtDecoder
import org.springframework.security.authentication.AuthenticationProvider
import org.springframework.security.authentication.BadCredentialsException
import org.springframework.security.core.Authentication

class OriginalJwtAuthenticationProvider(
    private val jwtDecoder: OriginalJwtDecoder
): AuthenticationProvider {
    override fun authenticate(authentication: Authentication): Authentication {
        val accessToken = (authentication as OriginalJwtAuthentication).credentials
        try {
            val userRecord = jwtDecoder.decode(accessToken)
            val authenticatedToken = OriginalJwtAuthentication.authenticated(userRecord)
            authenticatedToken.isAuthenticated = true
            return authenticatedToken
        } catch(exception: Exception) {
            throw BadCredentialsException("Invalid access token", exception)
        }
    }

    override fun supports(authentication: Class<*>): Boolean {
        return authentication == OriginalJwtAuthentication::class.java
    }
}