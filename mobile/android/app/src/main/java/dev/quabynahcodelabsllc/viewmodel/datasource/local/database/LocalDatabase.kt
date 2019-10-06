package dev.quabynahcodelabsllc.viewmodel.datasource.local.database

import android.content.Context
import androidx.room.Database
import androidx.room.Room
import androidx.room.RoomDatabase
import androidx.sqlite.db.SupportSQLiteDatabase
import dev.codelabs.template.debugger
import dev.quabynahcodelabsllc.Util
import dev.quabynahcodelabsllc.model.App

@Database(entities = [App::class], version = Util.DATABASE_VERSION, exportSchema = true)
abstract class LocalDatabase : RoomDatabase() {
    abstract fun appDao(): AppDao

    companion object {
        @Volatile
        private var instance: LocalDatabase? = null

        fun get(context: Context): LocalDatabase = instance ?: synchronized(this) {
            instance ?: Room.databaseBuilder(context, LocalDatabase::class.java, Util.DATABASE_NAME)
                .fallbackToDestructiveMigration()
                .addCallback(object : Callback() {
                    override fun onCreate(db: SupportSQLiteDatabase) {
                        super.onCreate(db)
                        debugger("Local database created successfully with version: ${db.version}")
                    }
                }).build().also { instance = it }
        }
    }
}