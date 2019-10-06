package dev.quabynahcodelabsllc

import android.content.Context
import com.google.gson.GsonBuilder
import com.google.gson.reflect.TypeToken
import dev.codelabs.template.debugger
import dev.quabynahcodelabsllc.model.App
import java.io.InputStreamReader

/**
 * Utility class for all constants
 */
object Util {
    const val DATABASE_VERSION = 1
    const val DATABASE_NAME = "codelabs.db"
    const val APPS = "apps"

    fun deserializeApps(context: Context): MutableList<App> {
        val apps = mutableListOf<App>()
        val gson = GsonBuilder().setPrettyPrinting().create()
        val type = object : TypeToken<List<App>>() {}.type
        try {
            val reader = InputStreamReader(context.assets.open("apps.json"))
            val gsonApps = gson.fromJson<List<App>>(reader, type)
            apps.addAll(gsonApps)
        } catch (e: Exception) {
            debugger("Unable to deserialize apps.json")
        }
        return apps
    }
}