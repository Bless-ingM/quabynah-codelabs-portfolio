package dev.quabynahcodelabsllc.viewmodel.datasource.local

import android.content.Context
import dev.quabynahcodelabsllc.viewmodel.datasource.DataSource
import dev.quabynahcodelabsllc.viewmodel.datasource.local.database.LocalDatabase

class LocalDataSource(context: Context) : DataSource {
    private val database by lazy { LocalDatabase.get(context) }
    val appDao by lazy { database.appDao() }
}