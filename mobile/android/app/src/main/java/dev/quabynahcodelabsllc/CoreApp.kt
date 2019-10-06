package dev.quabynahcodelabsllc

import android.app.Application
import dev.codelabs.template.Codelabs

/**
 * [Application] instance
 */
class CoreApp : Application() {
    override fun onCreate() {
        super.onCreate()
        Codelabs.init(this)
    }
}