package com.jobboard.config;

import org.hibernate.dialect.MySQLDialect;
import org.hibernate.boot.model.TypeContributions;
import org.hibernate.service.ServiceRegistry;
import org.hibernate.type.descriptor.sql.spi.DdlTypeRegistry;
import org.hibernate.dialect.DatabaseVersion;

import java.sql.Types;

public class LegacyMySQLDialect extends MySQLDialect {

    public LegacyMySQLDialect() {
        super(DatabaseVersion.make(5, 5));
    }

    @Override
    public String columnType(int sqlTypeCode) {
        if (sqlTypeCode == Types.TIMESTAMP) {
            return "datetime";
        }
        return super.columnType(sqlTypeCode);
    }
}
