package chotchki.db.dao;

import java.math.BigDecimal;
import java.util.List;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import chotchki.db.pojo.Album;

public interface AlbumMapper {
	@Select("select * from albums where parentId is null")
	public List<Album> getRoot();
	
	@Select("select * from albums where parentId = #{id}")
	public List<Album> getByParent(@Param("id") BigDecimal id);
	
	@Select("select * from albums where id = #{id}")
	public Album getById(@Param("id") BigDecimal id);
	
	@Insert("insert into albums(name, parentId, isPublic) values (#{name}, #{parentId}, #{isPublic}) returning *")
	public Album create(Album album);
	
	@Update("update albums set name = #{name}, parentId = #{parentId}, isPublic = #{isPublic} where id = #{id}")
	public void update(Album album);
}